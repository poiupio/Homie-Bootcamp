def touch?(record)
  return true if Setting.get('import_mode')

  member_ids = []
  member_ids = old_organization(record)
  member_ids += curent_organization(record)

  return true if member_ids.empty?

  member_ids.uniq.each do |user_id|
    next if user_id == record.id

    User.find(user_id).touch
  end

  true
end

def old_organization(record)
  id_changed = record.saved_changes['organization_id']

  return [] unless id_changed[0]
  return [] unless id_changed && id_changed[0] != id_changed[1]

  is_less_that = User.where(organization_id: id_changed[0]).count < 100
  return [] unless is_less_that

  organization = Organization.find(id_changed[0])
  organization.touch
  member_ids = organization.member_ids

  member_ids
end

def curent_organization(record)
  return [] unless record.organization

  is_less_that = User.where(organization_id: record.organization_id).count < 100
  return [] unless is_less_that

  record.organization.touch
  member_ids = record.organization.member_ids

  member_ids
end
