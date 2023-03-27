window.SIDEBAR_ITEMS = {"constant":[["BYTE_20",""],["BYTE_32",""],["BYTE_8",""],["STRING_64",""]],"fn":[["assert_all_equal",""],["assert_all_equal_result","Make sure all elements are equal for `Result<O, E>`"],["copy_directory","Helper function that recursively copies all of the contents from `src` to `dst`."],["get_project_root","Get the project root (relative to closest Cargo.lock file)"],["open_temp_db_and_copy","Open a temporary database located at `temp_path` and copy the contents from the folder `src_dir` to the temporary database’s path."],["prepare_snapshot","Creates the database backup directory by appending the `snapshot_name` to the `DB_MIGRATION_DIR`. Then this function will execute the provided `prepare_fn` which is expected to populate the database with the appropriate data for testing a migration. If `DB_MIGRATION_DIR` is not set, this function doesn’t do anything."],["validate_migrations","Iterates over all of the databases supplied in the database backup directory, which is specified by `DB_MIGRATION_DIR` environment variable. First, a temporary database will be created and the contents will be populated from the database backup directory. Next, this function will execute the provided `validate` closure. The `validate` closure is expected to do any validation necessary on the temporary database, such as applying the appropriate database migrations and then reading all of the data to verify the migrations were successful."]],"mod":[["btc",""],["ln",""]],"struct":[["FakeFed",""],["FakeInterconnect",""],["TestInputMeta",""]]};