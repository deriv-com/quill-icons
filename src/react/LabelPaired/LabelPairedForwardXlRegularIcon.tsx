import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardXlRegularIcon = (
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
      <path d='M22.219 18 12 10.594v14.812zM11.906 9q.47 0 .844.281l10.781 7.828q.47.33.469.891 0 .563-.469.89L12.75 26.72q-.375.28-.844.281-.609 0-.984-.422-.422-.375-.422-.984v-4.828l-8.25 5.953q-.375.28-.844.281-.609 0-.984-.422Q0 26.203 0 25.594V10.406q0-.609.422-.984Q.797 9 1.406 9q.47 0 .844.281l8.25 5.953v-4.828q0-.609.422-.984.375-.422.984-.422M10.5 18.89v-1.78l-9-6.516v14.812z' />
    </g>
    <defs>
      <clipPath id='130e01f9e1718c23373aec11cb9b6a17__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardXlRegularIcon);
export default ForwardRef;
