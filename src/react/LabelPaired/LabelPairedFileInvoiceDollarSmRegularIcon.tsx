import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 16V9H6.813a1.43 1.43 0 0 1-.93-.383 1.43 1.43 0 0 1-.383-.93V4.626H2a.85.85 0 0 0-.629.246.85.85 0 0 0-.246.629V16q0 .383.246.629a.85.85 0 0 0 .629.246h7a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629m0-7.875a.7.7 0 0 0-.137-.191L6.566 4.762a.4.4 0 0 0-.191-.11v3.036q.027.41.438.437zM.25 5.5q.027-.738.52-1.23.492-.493 1.23-.52h4.266q.546 0 .93.383l3.171 3.172q.383.383.383.93V16q-.027.738-.52 1.23-.492.493-1.23.52H2q-.738-.027-1.23-.52Q.277 16.739.25 16zM2 5.938q.027-.411.438-.438h1.75q.41.027.437.438-.027.41-.437.437h-1.75Q2.027 6.348 2 5.938m0 1.75q.027-.411.438-.438h1.75q.41.027.437.438-.027.41-.437.437h-1.75Q2.027 8.098 2 7.688m3.938 2.734v.355q.354.055.656.137.382.11.328.52-.137.382-.547.328a5.4 5.4 0 0 0-.875-.137q-.382 0-.684.137-.218.136-.191.273-.027.055.191.192.274.136.793.246l.028.027a5.2 5.2 0 0 1 .984.328q.547.273.629.985-.054.793-.656 1.066-.3.164-.657.219v.382q-.027.384-.437.438-.41-.054-.437-.437v-.41a9 9 0 0 1-.82-.192 1 1 0 0 1-.138-.055h-.027q-.382-.164-.3-.547.136-.383.546-.3.082.027.192.054.546.191 1.011.219.383 0 .657-.137.218-.11.191-.273.027-.11-.191-.246a4.3 4.3 0 0 0-.793-.274h-.082a4 4 0 0 1-.903-.328q-.574-.246-.656-.957.083-.793.684-1.039.3-.164.628-.219v-.355q.056-.411.438-.438.41.028.438.438' />
    </g>
    <defs>
      <clipPath id='f563f3e84d1780b252b8b223511d1baa__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarSmRegularIcon);
export default ForwardRef;
