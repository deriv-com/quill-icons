import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodOrangeBlackIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#000'>
      <path d='M54.879 65.084c-.68 0-1.056-.558-1.057-1.156.001-1.053 1.04-1.614 3.228-1.892v2.11c-.717.631-1.433.938-2.171.938M84.725 59.058c1.117 0 1.794.7 1.794 1.892h-3.6c.087-1.214.749-1.892 1.806-1.892M37.803 62.131c0-1.129.325-2.71 2.075-2.71s2.075 1.57 2.075 2.71-.326 2.72-2.076 2.72-2.074-1.591-2.074-2.72M76.903 61.666c0 1.183-.149 2.992-1.928 3.005-1.72.011-1.797-1.806-1.797-2.908 0-2.007.94-2.621 1.782-2.621 1.266 0 1.943 1.133 1.943 2.524' />
      <path
        fillRule='evenodd'
        d='M96 8H32v64h64zM54.172 66.685a5.25 5.25 0 0 0 2.935-.885l.214.784H59.4v-6.458c0-1.637-1.292-2.642-3.613-2.642q-2.551-.002-3.797 1.739l1.58.903a2.66 2.66 0 0 1 2.17-1.023c.907 0 1.4.375 1.4 1.023v.495c-3.778.426-5.611 1.483-5.611 3.477 0 1.48.982 2.587 2.644 2.587m9.015-9.04-1.94.268v8.666h2.326v-6.39c.795-.666 1.493-.989 2.193-.989.844 0 1.128.49 1.128 1.58v5.794h2.342v-6.202c0-1.926-.944-2.899-2.777-2.899-1.095 0-1.965.427-3.06 1.229zm17.383 4.482c0 2.93 1.567 4.617 4.193 4.617 1.831 0 3.19-.664 3.947-1.924l-1.719-.953c-.548.773-1.133 1.13-2.02 1.13-1.38 0-2.08-.852-2.098-2.538h5.931q.001-.108.01-.22.007-.114.008-.232c0-2.897-1.524-4.534-4.097-4.534s-4.155 1.723-4.155 4.654m-45.1.013c0 3.224 2.089 4.7 4.407 4.7s4.408-1.471 4.408-4.693-2.089-4.7-4.407-4.7c-2.32 0-4.408 1.469-4.408 4.693m12.65-4.468h-2.228v8.907h2.39v-5.924c.347-.793 1.462-.951 2.483-.951h.113v-2.2a2 2 0 0 0-.303-.015 3.45 3.45 0 0 0-2.454 1.23zm31.037 8.406v-8.433l-1.974.004L77 58.667c-.182-.436-.856-1.185-2.569-1.185-1.894.002-3.58 1.669-3.58 4.647 0 3.012 1.636 4.452 3.711 4.452 1.362 0 1.928-.632 2.3-1.296l.032.032v1.036c0 1.393-.589 1.976-1.806 1.976-1.312 0-1.578-.438-1.675-.876l-2.314.372c.325 1.531 1.948 2.22 3.698 2.22 4.247-.027 4.36-2.477 4.36-3.967m9.665-11.389h.922v-.392h-2.33v.392h.92v2.552h.488zm4.275 2.552h.485v-2.935h-.743l-.865 2.235-.878-2.235h-.75v2.935h.486v-2.46h.013l.965 2.46h.307l.964-2.46h.016z'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodOrangeBlackIcon);
export default ForwardRef;
