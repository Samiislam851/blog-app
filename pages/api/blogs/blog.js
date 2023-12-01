import * as fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

const handler = async (req, res) => {
  try {

    const data = await readFileAsync('blogData/blogdata.json');
    const fetchedData = JSON.parse(data);
    const blogs = fetchedData.blogs;
    const blog = blogs?.find((blog) => blog.slug == req.query.slug);
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    console.error('Error reading or parsing the file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
