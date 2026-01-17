import os

def rename_files(root_folder):
    for root, dirs, files in os.walk(root_folder):
        for filename in files:
            if "Large" in filename:
                old_path = os.path.join(root, filename)
                new_filename = filename.replace(" Large", "")
                new_path = os.path.join(root, new_filename)

                # Skip if name would be identical
                if old_path != new_path:
                    print(f"Renaming:\n  {old_path}\n→ {new_path}")
                    os.rename(old_path, new_path)

if __name__ == "__main__":
    # CHANGE THIS PATH
    TARGET_FOLDER = "./travels"
    rename_files(TARGET_FOLDER)