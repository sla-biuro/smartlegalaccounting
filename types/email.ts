export interface EmailFormData {
  name: string
  email: string
  message: string
}

export class EmailFormDataModel implements EmailFormData {
  name = ''
  email = ''
  message = ''

  constructor(init?: Partial<EmailFormData>) {
    if (init) Object.assign(this, init)
  }

  reset() {
    this.name = ''
    this.email = ''
    this.message = ''
  }
}

export default EmailFormDataModel
