import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 9.25c-.703 0-1.25.586-1.25 1.25v10c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25v-10c0-.664-.586-1.25-1.25-1.25zM.25 10.5C.25 9.133 1.344 8 2.75 8h10c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5h-10a2.47 2.47 0 0 1-2.5-2.5zm20.273 11.094L16.5 19.367v-1.445l4.61 2.578c.038 0 .078.04.117.04a.267.267 0 0 0 .273-.274v-9.493a.267.267 0 0 0-.273-.273c-.04 0-.079.04-.118.04L16.5 13.116v-1.445l4.023-2.227c.235-.117.47-.195.704-.195.82 0 1.523.703 1.523 1.523v9.493c0 .82-.703 1.484-1.523 1.484-.235 0-.47-.04-.704-.156' />
    </g>
    <defs>
      <clipPath id='0634f698fff6bdd2ed2d8f83efdc273a__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoLgRegularIcon);
export default ForwardRef;
