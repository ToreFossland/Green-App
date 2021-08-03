"""create performsChallenges table

Revision ID: 3fe94b5f297d
Revises: 6d1b9ed16db8
Create Date: 2021-08-03 01:23:46.772990-07:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3fe94b5f297d'
down_revision = '6d1b9ed16db8'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "performsChallenge",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("performsActivity_id", sa.Integer),
        sa.ForeignKeyConstraint(('performsActivity_id',), [
                                'performsActivities.id'], ),
        sa.Column("challenge_id", sa.Integer),
        sa.ForeignKeyConstraint(('challenge_id',), ['challenge.id'], ),
    )
    pass


def downgrade():
    op.drop_table("performsChallenge")
    pass
