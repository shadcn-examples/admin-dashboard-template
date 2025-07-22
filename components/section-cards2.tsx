import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const partners = [
  {
    name: "Google",
    cashback: "1.5%",
    logo: "G",
    bgColor: "bg-red-500"
  },
  {
    name: "Apple",
    cashback: "2.1%",
    logo: "🍎",
    bgColor: "bg-gray-900"
  },
  {
    name: "MailChimp",
    cashback: "3.2%",
    logo: "M",
    bgColor: "bg-yellow-500"
  },
  {
    name: "Figma",
    cashback: "2.8%",
    logo: "F",
    bgColor: "bg-purple-500"
  }
];

export function SectionCards2() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @5xl/main:grid-cols-3">
      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-base font-medium">Cashback From Partners</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="hover:bg-muted/50 flex items-center space-x-3 rounded-full border p-2 transition-colors">
                <div
                  className={`h-8 w-8 rounded-full ${partner.bgColor} flex items-center justify-center text-sm font-medium text-white`}>
                  {partner.logo}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{partner.name}</p>
                  <p className="text-muted-foreground text-xs">Cashback {partner.cashback}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base font-medium">Analytics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-3xl font-bold">$242.63</div>

          <div className="space-y-2">
            <div className="flex h-20 items-end space-x-1">
              <div className="flex h-16 flex-1 items-end justify-center rounded-t bg-green-500 pb-1">
                <span className="text-xs font-medium text-white">64%</span>
              </div>
              <div className="flex h-12 flex-1 items-end justify-center rounded-t bg-green-200 pb-1">
                <span className="text-xs font-medium text-gray-700">52%</span>
              </div>
              <div className="flex h-10 flex-1 items-end justify-center rounded-t bg-green-100 pb-1">
                <span className="text-xs font-medium text-gray-700">46%</span>
              </div>
            </div>
            <div className="text-muted-foreground flex justify-between text-xs">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="@container/card overflow-hidden border-0 bg-gradient-to-br! from-blue-500! to-blue-700! text-white">
        <CardContent className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="text-lg font-bold">VISA</div>
            <div className="text-sm opacity-80">Debit Card</div>
          </div>

          <div className="space-y-2">
            <div className="text-3xl font-bold">$22,428.26</div>
          </div>

          <div className="flex items-end justify-between pt-4">
            <div className="font-mono text-lg tracking-wider">•••• 9090</div>
            <div className="text-sm opacity-80">04/24</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
