import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  String username = "";
  String password = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "Login",
          style: TextStyle(
            fontWeight: FontWeight.bold,
            // fontSize: 25,
          ),
        ),
      ),
      body: Center(
        child: Form(
          key: _formKey,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              const Text(
                "Login",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 25,
                  color: Colors.black38,
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: 10,
                  horizontal: 20,
                ),
                child: TextField(
                  maxLength: 50,
                  decoration: const InputDecoration(
                    labelText: "Username...",
                  ),
                  onChanged: ((value) => setState(() {
                        username = value;
                      })),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: 10,
                  horizontal: 20,
                ),
                child: TextField(
                  maxLength: 50,
                  decoration: const InputDecoration(
                    labelText: "Password...",
                  ),
                  onChanged: ((value) => setState(() {
                        password = value;
                      })),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(
                  vertical: 10.0,
                  horizontal: 20.0,
                ),
                width: MediaQuery.of(context).size.width,
                height: 70,
                child: ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      // If the form is valid, display a snackbar. In the real world,
                      // you'd often call a server or save the information in a database.
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Processing Data')),
                      );
                      Navigator.pushNamed(
                        context,
                        "/home",
                      );
                    }
                  },
                  child: const Text('Login'),
                ),
              ),
              Container(
                padding: const EdgeInsets.symmetric(
                  vertical: 10.0,
                  horizontal: 20.0,
                ),
                width: MediaQuery.of(context).size.width,
                height: 70,
                child: OutlinedButton(
                  onPressed: () {
                    Navigator.pushNamed(
                      context,
                      "/register",
                    );
                  },
                  child: const Text("Register"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
