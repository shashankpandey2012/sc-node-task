Project Setup and Documentation

Step 1: Install the Project Dependencies

        npm install
        
Step 2: Start the Server

        npm start
        
Step 3: Call The login API

        Every API Response follows a format i.e
        {
         "data" : 
         "message" : 
         "status" : 
        }
        POST localhost:3000/api/login
            POST Body
             {
               "user_id" : "admin",
               "password" : "password"
             }
             
        Response
            i) If credentials are correct
            
                {
                    "data" : {
                               "user_id" : "admin",
                               "token" : "4566rc412345gr"
                              }
                    "message" : "OK",
                    "status" : 200
                }
             
             
             ii) If Credentials are not correct
             
                 {
                   "data" : null,
                   "message" : "INVALID USERID OR PASSWORD",
                   "status" : 403
                 }
        

Step 4: Call The JSON Patch API

        PATCH localhost:3000/api/v1/apply_json_patch
        
        Include JWT Token in Authorization Header 
        Request Body : {
               	"json" : {
               		"user": {
               			"firstName": "Albert"
               			}
               		},
               	
               	"patch" : {
               		"op": "replace", 
               		"path": "/user/firstName", 
               		"value": "Einst"
               		}
               }
               
        Response : 
                {
                  "data": {
                    "user": {
                      "firstName": "Einst"
                    }
                  },
                  "message": "OK",
                  "status": 200
                }
                
Step 5: Call the Image Thumbnail Generation API

        GET localhost:3000/api/v1/create_thumbnail?image_url=https://im0-c75.kxcdn.com/0/NEXT/NEXT/NEXT/1548482/0/cnb1117766.jpg
        
        Include JWT Token in Authorization Header and image_url in query Param
        
        Response : 
                Response will be an image of size 50by50
                
                
Step 6: Testing the APIs


        Run the Command to run the test
        
        npm test
        
        