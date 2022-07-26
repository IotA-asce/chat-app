import 'package:flutter/material.dart';
import 'package:flutter_app/tabs/chat_list.dart';
// import 'package:flutter_app/tabs/stories_list.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Scaffold(
        appBar: AppBar(
          bottom: const TabBar(
            tabs: [
              Tab(icon: Icon(Icons.chat)),
              Tab(icon: Icon(Icons.circle_outlined)),
              Tab(icon: Icon(Icons.call)),
            ],
          ),
          title: const Text('Den Den Mushi'),
        ),
        body: TabBarView(
          children: [
            // Icon(Icons.directions_car),
            ChatList(),
            // StoriesList(),
            Icon(Icons.directions_bike),
            Icon(Icons.directions_bike),
          ],
        ),
      ),
    );
  }
}
