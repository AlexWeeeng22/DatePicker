# DatePicker

# tech stacks
1. React 18
2. TypeScript
3. Vite
4. useState
5. Day.js

# how to init local git and remote git repository
echo "# DatePicker" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/AlexWeeeng22/DatePicker.git
git push -u origin main


# main function of frontend:
1. single date / date range selection
2. banned date(holidays, from API) 	
3. hover movement effect, fast selection(past 7 days / today)
4. responsive design(mobile adaption)
5. TypeScript ?
6. Encapulate into reusable component


npm install dayjs clsx tailwind-variants
npm install react-day-picker


# main API of backend
/api/holidays.   GET.     return banned date

/api/select.    POST.    save user's date/range selection

/api/history.   GET.  return history of user's selection


# development plan
1. create dataPicker component with React
2. add status management / selection logic / banned date processing
3. create great ui design with tailwind CSS
4. create backend API
5. dockerization + go online