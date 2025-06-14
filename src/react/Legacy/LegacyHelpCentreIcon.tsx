import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyHelpCentreIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.194 10.213q.46 0 .669.222.208.221.208.582v.18q0 .36-.208.581-.209.222-.67.222-.46 0-.668-.222-.21-.22-.209-.581v-.18q0-.36.209-.582.208-.222.669-.222M8.108 3q1.338 0 2.115.706T11 5.618q0 .664-.237 1.156a2.8 2.8 0 0 1-.612.838q-.374.347-.849.554a4.2 4.2 0 0 1-.95.291v1.496H7.246V7.68q1.179-.054 1.849-.554.669-.498.669-1.37v-.195q0-.706-.46-1.128-.462-.423-1.238-.423-.835 0-1.331.457t-.67 1.164L5 5.244q.129-.444.381-.852a2.9 2.9 0 0 1 .633-.72q.382-.312.9-.492T8.108 3' />
    </g>
    <defs>
      <clipPath id='e1c5016d785a67d3074453a7348aa3cf__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyHelpCentreIcon);
export default ForwardRef;
