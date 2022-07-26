import "package:flutter/material.dart";
import 'package:firebase_core/firebase_core.dart';
import 'firebase_options.dart';

import './screens/login_screen.dart';
import './screens/register_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(
    options: DefaultFirebaseOptions.currentPlatform,
  );

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
      },
    );
  }
}
