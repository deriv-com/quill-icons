import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.75 27V13.5H12q-.656 0-1.078-.422Q10.5 12.657 10.5 12V8.25H3q-.703.047-.75.75v18q.046.704.75.75h12q.703-.046.75-.75M0 9q.047-1.266.89-2.11Q1.735 6.048 3 6h7.781q1.22 0 2.11.89l4.218 4.22Q18 12 18 13.265V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27zm9 7.125q.844.047.938.938v.468q.514.048.984.188.796.28.703 1.125-.28.796-1.172.703A8.3 8.3 0 0 0 9 19.312q-.61 0-1.078.235-.282.188-.234.281 0 .047.187.14.469.235 1.313.423l.046.047h.047q.844.188 1.735.609.421.234.797.703.327.421.374 1.125-.093 1.453-1.218 2.016a2.9 2.9 0 0 1-1.031.375v.468q-.095.844-.938.938-.844-.094-.937-.938v-.515a12 12 0 0 1-1.22-.328q-.046 0-.093-.047-.094 0-.14-.047h-.141q-.798-.329-.61-1.172.33-.797 1.172-.656.093.047.235.093h.093a5.9 5.9 0 0 0 1.688.375q.656 0 1.031-.187.282-.187.235-.328.046-.047-.235-.235-.469-.234-1.312-.468h-.094a6.5 6.5 0 0 1-1.64-.61 2.8 2.8 0 0 1-.844-.656q-.33-.421-.375-1.125 0-.75.375-1.219.375-.515.89-.75.469-.234.984-.328v-.468q.095-.891.938-.938M4.5 10.5h3.75q.703.047.75.75-.047.703-.75.75H4.5q-.703-.047-.75-.75.046-.703.75-.75m0 3h3.75q.703.047.75.75-.047.703-.75.75H4.5q-.703-.047-.75-.75.046-.703.75-.75' />
    </g>
    <defs>
      <clipPath id='ae8464f1f1e51a5839e71a52a47b0174__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarXlBoldIcon);
export default ForwardRef;
