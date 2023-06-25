function grandParent(){
    console.log("Grand Parent");
    function parent(){
        console.log("Parent");
        function child(){
            console.log("child");
        } return child
    }return parent

}grandParent()()()