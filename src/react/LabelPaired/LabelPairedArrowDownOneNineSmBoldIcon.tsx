import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.594 5.281v3.282h.656q.602.054.656.656-.054.601-.656.656h-2.625q-.602-.054-.656-.656.054-.602.656-.656h.656V6.184l-.437.164q-.602.135-.848-.41-.136-.602.41-.848l1.313-.438a.7.7 0 0 1 .601.11q.274.19.274.52M4.035 16.684 1.41 14.059q-.382-.465 0-.93.465-.383.93 0l1.504 1.504V5.28q.054-.601.656-.656.602.054.656.656v9.352l1.504-1.504q.465-.383.93 0 .383.465 0 .93l-2.625 2.625q-.465.383-.93 0m7.684-2.434q.628-.027.957-.547.273-.546 0-1.094-.328-.519-.957-.546-.63.027-.957.546-.274.548 0 1.094.327.52.957.547m-.492 1.258a2.4 2.4 0 0 1-1.368-.82q-.519-.63-.546-1.532.027-1.012.71-1.695.684-.684 1.696-.711 1.012.027 1.695.71.684.685.711 1.696 0 .903-.574 1.586L12.02 16.63q-.438.438-.93.11-.437-.438-.11-.93z' />
    </g>
    <defs>
      <clipPath id='35fd2464c70b50743e373fd083e5a3ea__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineSmBoldIcon);
export default ForwardRef;
