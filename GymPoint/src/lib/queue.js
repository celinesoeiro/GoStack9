import Bee from 'bee-queue';
import registrationMail from '../app/jobs/RegistrationMail';
import redisConfig from '../config/redis';

const jobs = [registrationMail];

class Queue {
  constructor() {
    this.queues = {};
    this.init();
    // this.add();
  }

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];
      bee.process(handle);
    });
  }
}

export default new Queue();
