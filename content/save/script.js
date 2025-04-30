import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cikbaaqpzrdsaoxshymw.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)


export const saveData = async (count, marketpointer) => {
  const { data, error } = await supabase
    .from('user')
    .insert([{ clickCount: count, marketItem: marketpointer, timestamp: new Date() }]);

  if (error) {
    console.error('Error saving click data:', error);
  } else {
    console.log('Data saved successfully:', data);
  }
};

export const loadData = async () => {
  const { data, error } = await supabase
    .from('user')
    .select('clickCount', 'marketItem')
    .order('timestamp', {ascending: false})
    .limit(1);

  if (error) {
    console.error('Error loading click data:', error);
  } else if (data.lenght > 0){
    data[0].clickCount;
  } else {
    return 0;
  }
};