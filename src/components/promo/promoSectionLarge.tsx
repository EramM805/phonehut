interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {

  const styles = {
    pageHeader: {
      backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    },
  } as const;

  return (
    <>
      <section className="mb-8">
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          <span className="mask bg-black opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <h1 className="text-white mb-4" style={{fontSize: '5rem'}}>{title}</h1>
                <p className="lead text-white mb-sm-6 mb-4">{full_description}</p>
                <a href="tel:281-854-7211"><button className="btn btn-white btn-lg" style={{height:'5rem', fontSize: '1.5rem'}}>Call us for a quote or appointment!</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

