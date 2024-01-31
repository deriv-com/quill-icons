import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.938 4.188v1.34q1.34.136 2.296.382.383.137.329.547-.138.383-.547.3-.684-.163-1.586-.3a8.6 8.6 0 0 0-1.805-.082q-.874.082-1.45.438-.52.328-.71 1.093-.083.602.082.93.191.328.601.629.958.52 2.461.848l.055.027q.711.165 1.395.383.711.246 1.257.574.601.355.93.984.3.63.137 1.477-.328 1.395-1.695 1.914a5.9 5.9 0 0 1-1.75.3v1.34q-.029.411-.438.438-.383-.027-.437-.437v-1.368q-.247 0-.52-.054a13 13 0 0 1-1.285-.274 8.6 8.6 0 0 1-1.422-.465q-.356-.191-.246-.574.219-.355.574-.246.657.273 1.313.465.682.164 1.203.246 1.612.219 2.68-.191 1.011-.41 1.175-1.258.082-.602-.082-.93-.165-.356-.601-.629-.958-.52-2.461-.875h-.055q-.683-.165-1.395-.41a5.7 5.7 0 0 1-1.257-.574 2.3 2.3 0 0 1-.903-.957Q.453 8.562.617 7.742q.246-1.147 1.094-1.668A4.16 4.16 0 0 1 3.543 5.5h.52V4.188q.027-.411.437-.438.41.027.438.438' />
    </g>
    <defs>
      <clipPath id='34b8744d8865a724__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignSmRegularIcon);
export default ForwardRef;
