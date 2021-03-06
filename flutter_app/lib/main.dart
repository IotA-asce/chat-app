import "package:flutter/material.dart";
import 'package:flutter_app/screen/home_screen.dart';

import './screen/login_screen.dart';
import './screen/register_screen.dart';

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        //
        primarySwatch: Colors.blue,
      ),
      initialRoute: "/",
      routes: {
        "/": (context) => const LoginScreen(),
        "/register": (context) => const RegisterScreen(),
        "/home":(context) => const HomeScreen(),
      },
    );
  }
}
