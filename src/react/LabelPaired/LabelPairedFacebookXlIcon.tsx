import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFacebookXlIcon = (
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
      <path d='M23.625 18q-.094 4.453-2.812 7.594-2.72 3.14-6.985 3.89v-8.109h2.719L17.062 18h-3.234v-2.203a1.68 1.68 0 0 1 .375-1.219q.422-.562 1.5-.562h1.453v-2.86q-.047-.047-.797-.14a15 15 0 0 0-1.78-.094q-2.017 0-3.188 1.172t-1.22 3.328V18H7.22v3.375h2.953v8.11q-4.266-.75-6.985-3.891Q.47 22.454.376 18q.047-3.235 1.594-5.86A11.6 11.6 0 0 1 6.14 7.97Q8.766 6.42 12 6.375q3.235.047 5.86 1.594a11.6 11.6 0 0 1 4.171 4.172Q23.58 14.766 23.625 18' />
    </g>
    <defs>
      <clipPath id='979e5dfec75e20b85e242ab92171d69e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFacebookXlIcon);
export default ForwardRef;
