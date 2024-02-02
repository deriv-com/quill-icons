import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.5 10.406v4.64l8.297-5.812Q22.125 9 22.594 9q.609 0 .984.422.422.375.422.984v15.188q0 .609-.422.984-.375.422-.984.422-.423 0-.797-.234L13.5 20.953v4.64q0 .61-.422.985-.375.422-.984.422-.47 0-.844-.281L.469 18.89A1.03 1.03 0 0 1 0 18q0-.563.469-.89L11.25 9.28q.375-.28.844-.281.609 0 .984.422.422.375.422.984m0 7.406v.375L21.75 24V12.047zM3.047 18l8.203 5.953V12.047z' />
    </g>
    <defs>
      <clipPath id='1616aeca31cad1e4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlBoldIcon);
export default ForwardRef;
