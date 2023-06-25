function grandParent(){
    console.log("Grand Parent");
    function parent(){
        console.log("Parent");
        function child(){
            console.log("child");
        }child()
    }parent()

}grandParent()