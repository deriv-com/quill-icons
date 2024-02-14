import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiveLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.164 7.219q.117-.43.586-.469h8.125q.585.039.625.625-.039.585-.625.625H3.258l-1.563 6.25H7.75q2.109.04 3.555 1.445 1.406 1.446 1.445 3.555-.04 2.109-1.445 3.555Q9.859 24.21 7.75 24.25H3.57q-1.015 0-1.836-.508a3.3 3.3 0 0 1-1.25-1.406l-.156-.313q-.234-.507.274-.82.546-.234.82.274l.195.312Q2.242 22.961 3.57 23h4.18q1.602-.038 2.656-1.094 1.055-1.054 1.094-2.656-.039-1.602-1.094-2.656Q9.352 15.539 7.75 15.5H.875a.63.63 0 0 1-.508-.234.78.78 0 0 1-.117-.547z' />
    </g>
    <defs>
      <clipPath id='ff0682e8863ac2b17e86b7cdf90efd8d__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiveLgRegularIcon);
export default ForwardRef;
