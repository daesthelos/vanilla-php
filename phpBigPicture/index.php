<?php
  require __DIR__ . '/vendor/autoload.php';
  require __DIR__ . '/phpBigPicture/db.php';
  require __DIR__ . '/phpBigPicture/courses.php'; 

  use Monolog\Logger;
  use Monolog\Handler\StreamHandler;

  $log = new Logger('query_log');
  $log->pushHandler(new StreamHandler('logs/query.log', Logger::DEBUG));

  $db = new DB($log);
  $course = new Courses($db);

    // $result = $db->write_query("DELETE FROM courses;");

    $result = $course->create_course('High Performance PHP', 'Jonathon Klein', '2016-03-29');

    $result = $course->create_course('Composer: Getting Started', 'Jonathon Klein', '2016-09-16');

    $result = $course->create_course('PHP: The Big Picture', 'Jonathon Klein', '2016-09-14');

    $result = $course->create_course('Not Understanding PHP', 'Scott Yamamoto', '2021-06-24');

    $course->show_courses();
  ?>