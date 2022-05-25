import { YesNo } from "./generic";

export type ESignatureIOMethod = 'email' | 'sms';

export interface ESignatureIOSigner {
    name: string;
    email: string;
    mobile?: string;
    company_name?: string;
    signing_order?: string;
    auto_sign?: YesNo;
    required_identification_methods?: ESignatureIOMethod[];
    signature_request_delivery_method?: ESignatureIOMethod;
    signed_document_delivery_method?: ESignatureIOMethod;
    redirect_url?: string;
    embedded_redirect_iframe_only?: YesNo;
}

export interface ESignatureIOPlaceholderField {
    api_key: string;
    value?: string;
    documentElements?: any[];
}

export interface ESignatureIOSignerField {
    api_key: string;
    default_value: string;
}
export interface ESignatureIOEmailDetails {
    signature_request_subject?: string;
    signature_request_text?: string;
    final_contract_subject?: string;
    final_contract_text?: string;
    cc_email_addresses?: string[];
    reply_to?: string
}
export interface ESignatureIOCustomBranding {
    company_name?: string;
    logo_url?: string
}
export interface ESignatureIORequest {
  template_id: string;
  title?: string;
  signers: ESignatureIOSigner[];
  metadata?: string;
  locale?: string;
  test?: YesNo;
  custom_webhook_url?: string;
  placeholder_fields?: ESignatureIOPlaceholderField[];
  signer_fields?: ESignatureIOSignerField[];
  emails?: ESignatureIOEmailDetails;
  custom_branding?: ESignatureIOCustomBranding;
}