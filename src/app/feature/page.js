import FeatureGridItem from "@/components/FeatureGridItem";

const FeaturesGridPage = () => {
  const features = [
    {
      title: "Online Storefront",
      description:
        "Create stunning storefronts that differentiate your brand. Offer an effortless journey for your customers in an intuitive platform.",
      imageUrl: "/onlineStorefront.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "CRM and Loyalty Points",
      description:
        "Create a comprehensive customer record. Identify your top customers with sales history. Reward your loyal customers for their purchases.",
      imageUrl: "/loyality.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Sales Reporting",
      description:
        "Get detailed reporting of sales, profit, and customer behavior. Make informed decisions with comprehensive insights from your business.",
      imageUrl: "/sales.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Online Payments (eSewa, Khalti, FonePay & More)",
      description:
        "Accept online payments. Integrate with popular payment gateways to offer flexibility and convenience to your customers.",
      imageUrl: "/onlinePayment.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Delivery Channel Integration",
      description:
        "Seamlessly manage orders and deliveries. Integrate with various delivery partners to expand your reach and offer convenience.",
      imageUrl: "/deliveryChannel.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Accounting and eBilling (IRD Verified)",
      description:
        "Automate accounting tasks. Generate IRD verified bills with ease. Reconcile all transactions and manage your finances effortlessly.",
      imageUrl: "/accounting.png",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: "Point of Sale (POS)",
      description:
        "Efficiently process sales and manage inventory. Optimize your POS operations for a smooth customer experience.",
      imageUrl: "/pointofsales.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Omnichannel Customer Support",
      description:
        "Provide exceptional customer support across all channels. Resolve queries and build strong customer relationships.",
      imageUrl: "/omniChannel.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Discount and Gift Card Management",
      description:
        "Create and manage discounts and promotions. Offer gift cards to attract new customers and boost sales.",
      imageUrl: "/Card.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Advanced Analytics with Dashboard",
      description:
        "Gain valuable insights from your data. Monitor key performance indicators (KPIs) with interactive dashboards.",
      imageUrl: "/analytics.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Multi Store/Warehouse Management",
      description:
        "Manage multiple stores and warehouses from one central location. Track inventory, sales, and operations efficiently.",
      imageUrl: "/multistore.png",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Barcode and Inventory Management",
      description:
        "Automate inventory tracking with barcodes. Streamline your stock management and reduce manual errors.",
      imageUrl: "/barcode.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div
          className="w-full px-4 grid grid-cols-2 md:grid-cols-6 mx-auto lg:gap-8 md:gap-6 gap-4 xl:w-3/4 lg:w-4/5"
          style={{ gridAutoRows: "minmax(300px, auto)" }}
        >
          {features.map((feature, index) => (
            <FeatureGridItem
              key={index}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              colSpan={feature.colSpan}
              rowSpan={feature.rowSpan}
           
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default FeaturesGridPage;
