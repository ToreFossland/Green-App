"""create performsActivities table

Revision ID: af8504c588ff
Revises: ec23fe8476e5
Create Date: 2021-07-15 04:02:39.295056-07:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'af8504c588ff'
down_revision = 'ec23fe8476e5'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "performsActivities",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("user_id", sa.Integer),
        sa.ForeignKeyConstraint(('user_id',), ['user.id'], ),
        sa.Column("activities_id", sa.Integer),
        sa.ForeignKeyConstraint(('activities_id',), ['activity.id'], ),
        sa.Column("date", sa.String(100))
    )
    pass


def downgrade():
    op.drop_table("performsActivities")
    pass
