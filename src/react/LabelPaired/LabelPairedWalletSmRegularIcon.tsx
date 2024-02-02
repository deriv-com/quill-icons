import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.188 4.625h10.5q.41.027.437.438-.027.41-.437.437h-10.5a1.43 1.43 0 0 0-.93.383 1.43 1.43 0 0 0-.383.93v7.875q.027.546.383.93.382.355.93.382h9.625q.546-.027.93-.383.355-.383.382-.93V8.564a1.43 1.43 0 0 0-.383-.93 1.43 1.43 0 0 0-.93-.383h-8.75q-.41-.027-.437-.437.027-.411.438-.438h8.75q.93.027 1.558.629.601.63.629 1.559v6.124q-.027.93-.629 1.56-.63.6-1.559.628H2.188q-.93-.027-1.56-.629-.6-.63-.628-1.558V6.812q.027-.93.629-1.558.63-.601 1.559-.629m8.312 7.656q-.602-.054-.656-.656.054-.602.656-.656.602.054.656.656-.054.602-.656.656' />
    </g>
    <defs>
      <clipPath id='6869c6462001e22b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSmRegularIcon);
export default ForwardRef;
