// copies of the currently stored data, just in case crash and burn,
// until setup scripts are available.  setups should store JSON strings
// for immediate storing in localstorage


'chore:lists'
[{"created_at":1439090089874,"udpated_at":1439090089874,"title":"Bedtime","description":"Things to do at bedtime.","id":1439090089874},{"created_at":1439090069360,"udpated_at":1439090069360,"title":"Morning","description":"Things to do when you wake up in the morning.","id":1439090069360},{"created_at":1439090039769,"udpated_at":1439090039769,"title":"Dinner","description":"Things to do at dinner.","id":1439090039769},{"created_at":1439090191153,"udpated_at":1439090191153,"title":"Lunch","description":"Things to do at lunch.","id":1439090191153},{"created_at":1439090081592,"udpated_at":1439090081592,"title":"Afternoon","description":"Things to do at midday.","id":1439090081592,"updated_at":1439172340960},{"title":"Breakfast","description":"stuff to do at breakfast","id":1439172365503,"created_at":1439172365503,"updated_at":1439172365503}]

'chore:permissions'
[{"title":"view:all","id":1439349695872,"created_at":1439349695872,"updated_at":1439349695872},{"title":"edit:all"},{"title":"create:all","id":1439349769210,"created_at":1439349769210,"updated_at":1439349769210},{"title":"update:all"},{"title":"remove:all"}]

'chore:roles'
[]

'chore:tasks'
[{"points":1,"title":"Schnazzy Poo","description":"poo on some schnazzies","id":1439169989550,"created_at":1439169989550,"updated_at":1439177544293,"lists":[1439090000203,1439090089874,1439090069360],"assigned_to":[1439090369162]},{"title":"Shizzle pop","description":"pop some shilzles.","points":1,"id":1439169155591,"created_at":1439169155591,"updated_at":1439177549947,"lists":[1439090000203,1439090039769],"assigned_to":[1439090369164]},{"title":"Go fishing","description":"Go somewhere. and catch some fish.","points":1,"id":1439169081186,"created_at":1439169081186,"updated_at":1439177655708,"lists":[1439090081592],"assigned_to":[1439090369161,1439090369162,1439090369163]}]

'chore:users'
[{"id":1439090369162,"created_at":1439090369161,"updated_at":1439090369161,"name":{"first":"Joshua Lee","last":"Petersen","middle":"Vorakun"},"img":"/images/users/joshua.jpg","birthday":"","age":"","email":"","tags":[],"roles":["user"]},{"id":1439090369163,"created_at":1439090369161,"updated_at":1439090369161,"name":{"first":"Caleb","last":"Petersen","middle":"Benjamin Vannarak"},"img":"/images/users/caleb.jpg","birthday":"","age":"","email":"","tags":[],"roles":["user"]},{"id":1439090369164,"created_at":1439090369161,"updated_at":1439090369161,"name":{"first":"Isaac","last":"Petersen","middle":"Nehemia Vijett"},"img":"/images/users/isaac.jpg","birthday":"","age":"","email":"","tags":[],"roles":["user"]},{"id":1439090369161,"created_at":1439090369161,"updated_at":1439177435715,"name":{"first":"Benjamin","last":"Petersen","middle":"Alan"},"img":"/images/users/ben-small.png","birthday":"","age":"","email":"ben@benjaminapetersen.me","tags":[],"roles":["user","admin","etc"]}]
