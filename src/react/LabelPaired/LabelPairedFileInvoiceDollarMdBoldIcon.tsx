import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 18V9H8a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 8V5.5H2q-.469.031-.5.5v12q.031.47.5.5h8q.47-.03.5-.5M0 6q.03-.843.594-1.406Q1.157 4.032 2 4h5.188Q8 4 8.594 4.594l2.812 2.812Q12 8 12 8.844V18q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 18.844 0 18zm6 4.75q.562.031.625.625v.313q.345.03.656.124.53.189.469.75-.187.531-.781.47A5.5 5.5 0 0 0 6 12.874q-.405 0-.719.156-.187.126-.156.188 0 .03.125.094.312.156.875.28l.031.032h.032q.562.125 1.156.406.28.156.531.469.22.282.25.75-.062.969-.812 1.344a2 2 0 0 1-.688.25v.312q-.063.563-.625.625-.562-.062-.625-.625v-.343a8 8 0 0 1-.812-.22q-.031 0-.063-.03-.063 0-.094-.032h-.093q-.532-.219-.407-.781.219-.531.781-.437.063.03.157.062h.062q.594.22 1.125.25.438 0 .688-.125.188-.125.156-.219.03-.03-.156-.156a5 5 0 0 0-.875-.312H5.78a4.3 4.3 0 0 1-1.093-.407 1.9 1.9 0 0 1-.563-.437q-.22-.282-.25-.75 0-.5.25-.813.25-.344.594-.5.312-.156.656-.219v-.312q.063-.594.625-.625M3 7h2.5q.47.031.5.5-.03.47-.5.5H3q-.469-.03-.5-.5.031-.469.5-.5m0 2h2.5q.47.031.5.5-.03.47-.5.5H3q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='ec245c865778f4f214206f2f4908e16f__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarMdBoldIcon);
export default ForwardRef;
