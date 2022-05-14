# Generated by Django 4.0.4 on 2022-05-14 15:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('moviescore', '0003_seed_users'),
    ]

    operations = [
        migrations.RunSQL(
            """
                INSERT INTO moviescore_score(movie_id, user_id, score) VALUES (1, 1, 5.0);  
                INSERT INTO moviescore_score(movie_id, user_id, score) VALUES (1, 2, 4.0);
                INSERT INTO moviescore_score(movie_id, user_id, score) VALUES (2, 1, 3.0);
                INSERT INTO moviescore_score(movie_id, user_id, score) VALUES (2, 2, 3.0);
                INSERT INTO moviescore_score(movie_id, user_id, score) VALUES (2, 3, 4.0);  
            """,
            reverse_sql=migrations.RunSQL.noop),
    ]
