<?php
     if(empty($_POST["name"]))
     {
          $error = "<label class='text-danger'>Enter contact</label>";
     }
     else if(empty($_POST["contact"]))
     {
          $error = "<label class='text-danger'>Enter Contact</label>";
     }
     else
     {
          if(file_exists('contacts_data.json'))
          {
               $current_data = file_get_contents('contacts_data.json');
               $array_data = json_decode($current_data, true);
               $extra = array(
                    'name'               =>     $_POST['name'],
                    'contact'          =>     $_POST["contact"]
               );
               $array_data[] = $extra;
               $final_data = json_encode($array_data);
               if(file_put_contents('contacts_data.json', $final_data))
               {
                    $message = "<label class='text-success'>File Appended Success fully</p>";
               }
          }
          else
          {
               $error = 'JSON File not exits';
          }
     }
?>