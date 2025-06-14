import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.844 24.89v-.046l.047.047c.75.28 1.64.422 2.53.422 1.313 0 2.438-.282 3.329-.891q1.336-.915 2.11-2.531l.28-.61-3.609-2.11-.281.845c-.14.375-.375.75-.703 1.03-.235.188-.563.329-1.125.329-.61 0-1.031-.187-1.36-.516-.328-.328-.515-.89-.515-1.78v-2.017c0-.89.187-1.406.515-1.734.329-.375.75-.562 1.36-.562s.89.14 1.078.28c.234.235.422.517.563.938l.28.844 3.75-1.969-.28-.656q-.704-1.688-2.11-2.531c-.89-.61-2.015-.844-3.281-.844-.938 0-1.781.14-2.578.469-.797.375-1.453.844-2.016 1.5a6.3 6.3 0 0 0-1.265 2.344c-.282.89-.422 1.922-.422 3.047s.14 2.109.422 3v.046a6.7 6.7 0 0 0 1.265 2.25 5.6 5.6 0 0 0 2.016 1.407M8.53 11.064c.89 0 1.781.14 2.531.421.797.329 1.5.75 2.063 1.407.563.609.984 1.359 1.266 2.203.28.89.422 1.875.422 3 0 1.078-.141 2.11-.422 2.953v.047c-.282.843-.703 1.593-1.266 2.203a5.1 5.1 0 0 1-2.062 1.36c-.75.327-1.594.468-2.532.468H3.047V11.063zm1.406 9.656c.282-.282.47-.75.47-1.688V17.11c0-.937-.188-1.406-.47-1.64-.28-.328-.703-.516-1.406-.516H7.312v6.235h1.22c.702 0 1.124-.188 1.406-.47' />
    </g>
    <defs>
      <clipPath id='c89bd83945d9fa5f08303f796a4d79a3__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationXlFillIcon);
export default ForwardRef;
