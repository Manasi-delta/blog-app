export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ background: "white" }}>
        {children}
      </body>
    </html>
  )
}