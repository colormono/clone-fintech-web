import { useTheme } from 'next-themes';

export const ToggleMode = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      {theme !== undefined && (
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">System</option>
        </select>
      )}
    </div>
  );
};

export default ToggleMode;
