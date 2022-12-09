import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { FormService } from '../../modules/shared/services/form-service.service';

export class UrlAnalyzerModel {
    url: string = '';
}

export class UrlAnalyzerResult {
    hostname?: string;
    port?: string;
    path?: string;
    queryString?: string;
    queryStringValues: { name: string; value: string }[] = [];
    fragment?: string;
}

const UrlAnalyzerFormDefaults = new UrlAnalyzerModel();

@Component({
    selector: 'app-url-analyzer-page',
    templateUrl: './url-analyzer-page.component.html'
})
export class UrlAnalyzerPageComponent implements OnInit {
    form!: UntypedFormGroup;
    result: UrlAnalyzerResult | null = null;
    hasError = false;
    showQueryDetails = false;

    constructor(public formService: FormService) {
    }

    ngOnInit(): void {
        this.form = this.defineFormGroup();
    }

    defineFormGroup(): UntypedFormGroup {
        return new UntypedFormGroup({
            url: new UntypedFormControl(UrlAnalyzerFormDefaults.url, {
                validators: [Validators.required]
            })
        });
    }

    handleSubmit() {
        if (this.formService.validate(this.form)) {
            try {
                const model: UrlAnalyzerModel = this.form.value;

                let urlToParse = model.url;
                if (!urlToParse.toLowerCase().startsWith('http')) {
                    urlToParse = 'https://' + urlToParse;
                }

                // console.log(urlToParse)
                const url = new URL(urlToParse);

                this.result = new UrlAnalyzerResult();
                this.result.hostname = url.hostname;
                this.result.port = url.port;
                this.result.path = url.pathname;
                this.result.fragment = url.hash;

                if (url.search) {
                    this.result.queryString = url.search.substring(1);
                }

                if (this.result.queryStringValues) {
                    url.searchParams.forEach((val, key) => {
                        this.result?.queryStringValues.push({
                            name: key,
                            value: val
                        });
                    });
                }

                this.hasError = false;
            } catch (err) {
                this.result = null;
                this.hasError = true;
            }
        }
    }

    handleToogleSearchDetails() {
        this.showQueryDetails = !this.showQueryDetails;
    }

    handleReset() {
        this.formService.reset(this.form, UrlAnalyzerFormDefaults);
        this.result = null;
    }
}
