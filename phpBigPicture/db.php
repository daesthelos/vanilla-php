<?php
  class DB {
    private $handle;
    private $logger;

    public function __construct($logger){
      $this->handle = new PDO('mysql:dbname=vanillaphp; host=127.0.0.1;port=3306', 'root', 'kappa7phi13');
      $this->logger = $logger;
    }

    public function read_query($query){
      $result = $this->handle->query($query);
      $this->logger->info('Read query executed', ['query' => $query]);
      return $result;
    }
    public function write_query($query){
      $result = $this->handle->query($query);
      $this->logger->notice('Write query executed', ['query' => $query]);
      return $result;
    }
  }
?>