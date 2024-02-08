import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 15.5q.04-2.735 1.328-5Q2.657 8.235 5 6.828 7.383 5.5 10 5.5t5 1.328q2.344 1.407 3.672 3.672 1.29 2.265 1.328 5-.04 2.735-1.328 5-1.329 2.265-3.672 3.672-2.382 1.328-5 1.328t-5-1.328Q2.657 22.765 1.328 20.5.038 18.235 0 15.5m10-5.937a.55.55 0 0 0-.547.351l-1.406 2.852-3.164.468q-.39.08-.508.43-.117.351.156.625l2.266 2.266-.547 3.125a.65.65 0 0 0 .273.625.67.67 0 0 0 .665.039L10 18.859l2.852 1.485a.6.6 0 0 0 .625-.04.65.65 0 0 0 .273-.624l-.547-3.125 2.305-2.227a.78.78 0 0 0 .156-.664.7.7 0 0 0-.508-.43l-3.164-.468-1.445-2.852A.55.55 0 0 0 10 9.563' />
    </g>
    <defs>
      <clipPath id='14673358d275006a81cc18b4a18473f2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarLgFillIcon);
export default ForwardRef;
