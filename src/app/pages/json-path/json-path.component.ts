import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import * as jsonpath from 'jsonpath'
import { FormService } from '../../modules/form/services/form-service.service'
import { PageComponent } from '../PageComponent'

class JsonPathFormModule {
	json?: string
	path?: string
}

const FormDefaults = new JsonPathFormModule()

@Component({
	selector: 'app-json-path',
	templateUrl: './json-path.component.html'
})
export class JsonPathComponent extends PageComponent implements OnInit {
	form!: FormGroup
	result?: string
	error?: string
	pathError?: string

	constructor(route: ActivatedRoute, private fb: FormBuilder, private formService: FormService) {
		super(route)
	}

	ngOnInit() {
		this.form = this.defineForm()
	}

	defineForm(): FormGroup {
		return this.fb.group({
			json: [FormDefaults.json, [Validators.required]],
			path: [FormDefaults.path, [Validators.required]]
		})
	}

	handleReset() {
		this.formService.reset(this.form, FormDefaults)
		this.result = undefined
	}

	handleSubmit() {
		if (this.formService.validate(this.form)) {
			const model: JsonPathFormModule = this.form.value

			this.error = undefined

			let inputObj: any
			try {
				inputObj = JSON.parse(model.json!)
			} catch (err: any) {
				this.error = 'Error while parsing the input JSON : "\n' + err?.message + '"'
			}

			let result: any
			try {
				result = jsonpath.query(inputObj, model.path!)
			} catch (err: any) {
				this.error = 'Error while evaluating the path query : "\n' + err.message + '"'
			}

			this.result = JSON.stringify(result, null, '  ')
		}
	}
}
