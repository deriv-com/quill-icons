import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleUserLgFillIcon = (
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
      <path d='M15.586 20.54c-.899-1.524-2.5-2.54-4.336-2.54h-2.5a4.95 4.95 0 0 0-4.336 2.54C5.781 22.062 7.774 23 10 23c2.188 0 4.18-.937 5.586-2.46M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10 .625c.977 0 1.914-.508 2.422-1.406.508-.86.508-1.914 0-2.813-.508-.86-1.445-1.406-2.422-1.406a2.87 2.87 0 0 0-2.46 1.406c-.509.899-.509 1.953 0 2.813.507.898 1.444 1.406 2.46 1.406' />
    </g>
    <defs>
      <clipPath id='b6fdf326ff841bfca96652dc2a53d423__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleUserLgFillIcon);
export default ForwardRef;
