var emailTemplateBuilder = require("email-template-builder");

module.exports.getTemplate = function (obj)
{
    
    var templateConfig = {
        title: "",
        width: 600,
        children: [
            {
                type: "container",
                settings: [{ backgroundColor: "black", color: "white" }],
                children: [
                    {
                        type: "text",
                        value: "To activate your account  <a href='http://localhost:3000/api/user/activate?activation_token={{activation_token}}'>Click here</a> "
                    }
                ]
            }
        ]
    };


    var template = emailTemplateBuilder.generate(templateConfig);  
    return emailTemplateBuilder.generate(obj, template)
}