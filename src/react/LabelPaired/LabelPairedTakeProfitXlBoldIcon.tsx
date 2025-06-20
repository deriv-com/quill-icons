import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTakeProfitXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.547 14.156v10.125H7.78V14.156H4.406V11.72h9.516v2.437zm5.25 10.125V11.72h5.953c.563 0 1.125.14 1.594.328a3.5 3.5 0 0 1 1.172.797 4.1 4.1 0 0 1 .797 1.312 5.7 5.7 0 0 1 0 3.235 3.4 3.4 0 0 1-.797 1.265c-.328.328-.703.61-1.172.844-.469.188-.985.281-1.594.281h-3.187v4.5zm2.765-6.89h2.86c.422 0 .75-.094.937-.328.282-.188.375-.516.375-.938v-.75c0-.422-.093-.75-.375-.937-.187-.235-.515-.329-.937-.329h-2.86z' />
    </g>
    <defs>
      <clipPath id='6b08a728d16885feec7cba778c7eca7a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTakeProfitXlBoldIcon);
export default ForwardRef;
