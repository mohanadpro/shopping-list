import users from '../../data/users.json';

const state={
      user:{},
      isSignUpSuccess:false,
      users:users
};

const getters={
      getUser:state=>state.user,
      getIsSignUpSuccess:state=>state.isSignUpSuccess
}

const actions={
      signIn({commit},userSignIn){
            var userfounded=users.find(x=>x.username==userSignIn.username&&x.password==userSignIn.password);
            console.log(userfounded)
            commit('setUser',userfounded)
      },
      signUp({commit},newUser){
            
            commit('addUser',newUser)
      }
};

const mutations={
      setUser:(state,foundUser)=>{(state.user=foundUser)},
      addUser:(state,newUser)=>{(state.users.push(newUser),state.isSignUpSuccess=true)}
};

export default{
      state,
      getters,
      actions,
      mutations
}
