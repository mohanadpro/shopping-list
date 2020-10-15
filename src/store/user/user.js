import users from '../../data/users.json';

const state = {
      user: { username: '', isAuthenticated: false },
      isSignUpSuccess: false,
      users: users
};

const getters = {
      getUser: state => state.user,
      getIsSignUpSuccess: state => state.isSignUpSuccess
}

const actions = {
      signIn({ commit }, userSignIn) {
            var userfounded = users.find(x => x.username == userSignIn.username && x.password == userSignIn.password);
            commit('setUser', userfounded)
      },
      signUp({ commit }, newUser) {

            commit('addUser', newUser)
      }
};

const mutations = {
      setUser: (state, foundUser) => {
            state.user.username = foundUser.username
            state.user.isAuthenticated = true;
            localStorage.setItem("isAuthenticated",true);
      }
,
      addUser: (state, newUser) => { (state.users.push(newUser),state.isSignUpSuccess = true)}
};

export default {
      state,
      getters,
      actions,
      mutations
}
