import FeatureGridItem from "@/components/FeatureGridItem";

const FeaturesGridPage = () => {
  const features = [
    {
      title: "Online Storefront",
      description:
        "Create a stunning, mobile-friendly storefront with customizable templates and smooth navigation for a seamless shopping experience on any device.",
      imageUrl: "/Features/onlineStorefront.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "CRM and Loyalty Points",
      description:
        "Strengthen customer relationships with integrated CRM tools that track behavior, reward loyalty, and automate personalized marketing to boost retention.",
      imageUrl: "/Features/loyality.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Sales Reporting",
      description:
        "Get detailed sales reports by product, channel, staff, and promotions to track performance, monitor discounts , and make smart business decisions.",
      imageUrl: "/Features/sales.png",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Online Payments (eSewa, Khalti, FonePay & More)",
      description:
        "Accept online payments. Integrate with popular payment gateways to offer flexibility and convenience to your customers.",
      imageUrl: "/Features/onlinePayment.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Delivery Channel Integration",
      description:
        "Seamlessly manage orders and deliveries. Integrate with various delivery partners to expand your reach and offer convenience.",
      imageUrl: "/Features/deliveryChannel.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Accounting and eBilling (IRD Verified)",
      description:
        "Automate accounting tasks. Generate IRD verified bills with ease. Reconcile all transactions and manage your finances effortlessly.",
      imageUrl: "/Features/accounting.png",
      colSpan: 1,
      rowSpan: 2,
    },
    {
      title: "Point of Sale (POS)",
      description:
        "Unify in-store and online sales with a smart POS system that manages payments, inventory, and customer data—featuring mobile terminals and customer displays for a seamless checkout experience.",
      imageUrl: "/Features/pointofsales.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Omnichannel Customer Support",
      description:
        "Provide exceptional customer support across all channels. Resolve queries and build strong customer relationships.",
      imageUrl: "/Features/omniChannel.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Discount and Gift Card Management",
      description:
        "Create and manage discounts and promotions. Offer gift cards to attract new customers and boost sales.",
      imageUrl: "/Features/Card.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Advanced Analytics with Dashboard",
      description:
        "Gain valuable insights from your data. Monitor key performance indicators (KPIs) with interactive dashboards.",
      imageUrl: "/Features/analytics.jpg",
      colSpan: 1,
      rowSpan: 1,
    },
    {
      title: "Multi Store/Warehouse Management",
      description:
        "Manage multiple stores and warehouses from one central location. Track inventory, sales, and operations efficiently.",
      imageUrl: "/Features/multistore.png",
      colSpan: 1.5,
      rowSpan: 1,
    },
    {
      title: "Barcode and Inventory Management",
      description:
        "Efficiently track every product with barcode integration. Assign unique barcodes to items, enabling real-time inventory updates during sales, restocking, and transfers. Automated alerts help prevent stockouts, while detailed reports provide insights into sales trends and inventory performance.",
      imageUrl: "/Features/barcode.jpg",
      colSpan: 1.5,
      rowSpan: 1,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-8">
        <div className="text-center max-w-[498px] mx-auto px-4  flex  mt-12 mb-5 flex-col sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#313332]">
            Features
          </h1>
          <p className="mt-2 text-base font-[500] text-[#646966] leading-relaxed text-[14px]">
            Don&apos;t just take our word for it—hear directly from the buyers,
            sellers, and investors who have trusted us with their real estate
            needs.
          </p>
        </div>

        <div
          className="w-full px-4 grid  md:grid-cols-6 mx-auto lg:gap-6 md:gap-6 gap-4 font-black lg:w-4/5"
          style={{ gridAutoRows: "minmax(300px, auto)" }}
        >
          {features.map((feature, index) => {
            return (
              <FeatureGridItem
                key={index}
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                colSpan={feature.colSpan}
                rowSpan={feature.rowSpan}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default FeaturesGridPage;
