<?php

namespace App\Console\Commands;

use App\Http\Controllers\NewsletterController;
use Illuminate\Console\Command;

class SendNewsletter extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sendNewsletter';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This sends newsletter to all subscribed';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        NewsletterController::sendMail();
        return 0;
    }
}
