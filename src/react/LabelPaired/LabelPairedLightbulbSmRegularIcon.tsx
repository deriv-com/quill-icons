import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbSmRegularIcon = (
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
      <path d='M8.727 10.805q.683-.957.71-2.242-.054-1.668-1.148-2.79Q7.17 4.68 5.5 4.625q-1.668.055-2.79 1.148-1.092 1.122-1.147 2.79.027 1.284.71 2.242.11.165.247.355l.109.164q.027.028.027.055.547.71 1.012 1.504a4.5 4.5 0 0 1 .465 1.367H3.23a2.8 2.8 0 0 0-.328-.93 12 12 0 0 0-.93-1.422l-.437-.601Q.714 10.12.688 8.562q.054-2.05 1.421-3.39Q3.45 3.804 5.5 3.75q2.05.054 3.39 1.422 1.368 1.34 1.422 3.39-.027 1.56-.847 2.735-.219.3-.438.574v.027q-.519.684-.93 1.395a3.1 3.1 0 0 0-.327.957h-.875q.081-.684.437-1.367.465-.82 1.012-1.559h.027q.191-.273.356-.52M5.5 6.375q-.93.027-1.559.629-.6.63-.628 1.559-.029.41-.438.437-.41-.027-.437-.437.027-1.314.902-2.16.847-.876 2.16-.903.41.027.438.438-.029.41-.438.437M4.27 16q.327.82 1.23.875.903-.055 1.23-.875zm-.957-.437v-.137q.027-.274.3-.301h3.774q.273.027.3.3v.137q-.027.93-.628 1.56-.63.6-1.559.628-.93-.027-1.559-.629-.6-.63-.628-1.558' />
    </g>
    <defs>
      <clipPath id='7c0e90b28097a0ed137e35040d834386__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbSmRegularIcon);
export default ForwardRef;
