import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';

const schema = {

    title: "Form",
    type: "object",
    required: ["name", "age", "sex"],
    properties: {
        name: { type: "string", title: "Name" },
        age: { type: "integer", title: "Age", minimum: 0 },
        sex: {
            type: "string",
            title: "Sex",
            enum: ["Man", "Woman", "Other"]
        },
        context: {
            type: "string",
            title: "Context",
            maxLength: 300
        }
    }

}

const uiSchema = {
    context: {
        "ui:widget": "textarea",
        "ui:options": { rows: 3 }
    }
}

export default function SchemaForm() {

    const handleSubmit = ({ formData }) => {

        console.log(formData);

    }

    return (
        <>
            {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" /> */}
            <h1>Form with schema (rjsf/core)</h1>
            <Form
                schema={schema}
                uiSchema={uiSchema}
                onSubmit={handleSubmit}
                validator={validator}
            />
        </>
    )

}