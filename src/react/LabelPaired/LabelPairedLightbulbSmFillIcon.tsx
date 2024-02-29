import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbSmFillIcon = (
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
      <path d='M7.688 14.25H3.313a8 8 0 0 0-1.34-2.352v-.027a16 16 0 0 1-.438-.574Q.714 10.12.688 8.562q.054-2.05 1.421-3.39Q3.45 3.804 5.5 3.75q2.05.054 3.39 1.422 1.368 1.34 1.422 3.39-.027 1.56-.847 2.735l-.438.601v.028a8 8 0 0 0-1.34 2.324M5.5 17.75q-.93-.027-1.559-.629-.6-.63-.628-1.558v-.438h4.374v.438q-.027.93-.628 1.558-.63.601-1.559.629M3.313 8.563q.027-.93.628-1.56.63-.6 1.559-.628.41-.027.438-.437-.029-.411-.438-.438-1.312.027-2.16.902-.875.848-.902 2.16.027.411.437.438.41-.027.438-.437' />
    </g>
    <defs>
      <clipPath id='78c04ec2d14c50732f337fb52e5a4b1a__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbSmFillIcon);
export default ForwardRef;
